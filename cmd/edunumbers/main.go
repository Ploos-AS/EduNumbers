package main

import (
 "fmt"
 "strconv"
 "fyne.io/fyne/v2"
 "fyne.io/fyne/v2/app"
 "fyne.io/fyne/v2/container"
 "fyne.io/fyne/v2/widget"
 "github.com/Ploos-AS/EduNumbers/internal/core"
)

func baseConverter() fyne.CanvasObject {
 value:=widget.NewEntry();value.SetText("42")
 base:=widget.NewSelect([]string{"2","8","10","16","36"},nil);base.SetSelected("10")
 result:=widget.NewLabel("")
 update:=func(){r,_:=strconv.Atoi(base.Selected);n,err:=core.ParseBase(value.Text,r);if err!=nil{result.SetText(err.Error());return};lines:="";for _,b:=range []int{2,8,10,16,36}{s,_:=core.FormatBase(n,b);lines+=fmt.Sprintf("Base %d: %s\n",b,s)};result.SetText(lines)}
 value.OnChanged=func(string){update()};base.OnChanged=func(string){update()};update()
 return container.NewVBox(widget.NewLabelWithStyle("Base Converter",fyne.TextAlignLeading,fyne.TextStyle{Bold:true}),widget.NewForm(widget.NewFormItem("Value",value),widget.NewFormItem("Input base",base)),result)
}

func bitVisualizer() fyne.CanvasObject {
 value:=widget.NewEntry();value.SetText("42")
 width:=widget.NewSelect([]string{"8","16","32","64"},nil);width.SetSelected("8")
 summary:=widget.NewLabel("");bits:=container.NewGridWithColumns(8)
 update:=func(){w,_:=strconv.Atoi(width.Selected);m,err:=core.ParseUnsigned(value.Text,w);if err!=nil{summary.SetText(err.Error());bits.RemoveAll();return};summary.SetText(fmt.Sprintf("Decimal: %s\nHex: 0x%s\nBinary: %s",m.Value.String(),m.Value.Text(16),core.GroupedBinary(m.Value,w)));bits.RemoveAll();for _,bit:=range m.Bits{b:=bit;btt:=widget.NewButton(fmt.Sprintf("%d\n2^%d",map[bool]int{true:1,false:0}[b.Set],b.Position),func(){next,_:=core.ToggleBit(m,b.Position);value.SetText(next.Value.String())});bits.Add(btt)};bits.Refresh()}
 value.OnChanged=func(string){update()};width.OnChanged=func(string){update()};update()
 return container.NewVBox(widget.NewLabelWithStyle("Bit Visualizer",fyne.TextAlignLeading,fyne.TextStyle{Bold:true}),widget.NewForm(widget.NewFormItem("Decimal value",value),widget.NewFormItem("Width",width)),summary,bits)
}

func twosComplement() fyne.CanvasObject {
 value:=widget.NewEntry();value.SetText("-42");width:=widget.NewSelect([]string{"8","16","32","64"},nil);width.SetSelected("8");out:=widget.NewLabel("")
 update:=func(){w,_:=strconv.Atoi(width.Selected);m,err:=core.ParseSigned(value.Text,w);if err!=nil{out.SetText(err.Error());return};out.SetText(fmt.Sprintf("Signed: %s\nEncoded unsigned: %s\nHex: 0x%s\nBinary: %s\nRange: %s .. %s",m.Signed,m.Encoded,m.Encoded.Text(16),core.GroupedBinary(m.Encoded,w),m.Min,m.Max))}
 value.OnChanged=func(string){update()};width.OnChanged=func(string){update()};update()
 return container.NewVBox(widget.NewLabelWithStyle("Two’s Complement",fyne.TextAlignLeading,fyne.TextStyle{Bold:true}),widget.NewForm(widget.NewFormItem("Signed value",value),widget.NewFormItem("Width",width)),out)
}

func endianVisualizer() fyne.CanvasObject {
 value:=widget.NewEntry();value.SetText("12345678");width:=widget.NewSelect([]string{"16","32","64"},nil);width.SetSelected("32");out:=widget.NewLabel("")
 update:=func(){w,_:=strconv.Atoi(width.Selected);m,err:=core.ParseHexEndian(value.Text,w);if err!=nil{out.SetText(err.Error());return};out.SetText(fmt.Sprintf("Value: 0x%s\nBig endian:    %s\nLittle endian: %s",m.Value.Text(16),core.HexBytes(m.BigEndian),core.HexBytes(m.LittleEndian)))}
 value.OnChanged=func(string){update()};width.OnChanged=func(string){update()};update()
 return container.NewVBox(widget.NewLabelWithStyle("Endian Visualizer",fyne.TextAlignLeading,fyne.TextStyle{Bold:true}),widget.NewForm(widget.NewFormItem("Hex value",value),widget.NewFormItem("Width",width)),out)
}

func main(){
 a:=app.NewWithID("no.ploos.edunumbers");w:=a.NewWindow("EduNumbers Desktop");w.Resize(fyne.NewSize(1040,700))
 content:=container.NewStack(baseConverter())
 names:=[]string{"Base Converter","Bit Visualizer","Two’s Complement","Endian Visualizer","Bitmask Playground","IEEE-754 Explorer"}
 list:=widget.NewList(func()int{return len(names)},func()fyne.CanvasObject{return widget.NewLabel("")},func(id widget.ListItemID,o fyne.CanvasObject){o.(*widget.Label).SetText(names[id])})
 list.OnSelected=func(id widget.ListItemID){switch id{case 0:content.Objects=[]fyne.CanvasObject{baseConverter()};case 1:content.Objects=[]fyne.CanvasObject{bitVisualizer()};case 2:content.Objects=[]fyne.CanvasObject{twosComplement()};case 3:content.Objects=[]fyne.CanvasObject{endianVisualizer()};default:content.Objects=[]fyne.CanvasObject{widget.NewLabel(names[id]+" — coming in M28")};};content.Refresh()}
 list.Select(0)
 header:=widget.NewLabelWithStyle("EduNumbers Desktop",fyne.TextAlignLeading,fyne.TextStyle{Bold:true})
 w.SetContent(container.NewBorder(header,nil,container.NewGridWrap(fyne.NewSize(220,600),list),nil,container.NewPadded(content)));w.ShowAndRun()
}
