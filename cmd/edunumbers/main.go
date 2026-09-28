package main

import (
 "fyne.io/fyne/v2"
 "fyne.io/fyne/v2/app"
 "fyne.io/fyne/v2/container"
 "fyne.io/fyne/v2/widget"
 "github.com/Ploos-AS/EduNumbers/internal/i18n"
)

func main(){
 a:=app.NewWithID("no.ploos.edunumbers");w:=a.NewWindow("EduNumbers Desktop");w.Resize(fyne.NewSize(960,640))
 lang:=i18n.Norwegian
 title:=widget.NewLabelWithStyle("EduNumbers Desktop",fyne.TextAlignLeading,fyne.TextStyle{Bold:true})
 intro:=widget.NewLabel(i18n.Text{NO:"Utforsk hvordan datamaskiner representerer tall.",EN:"Explore how computers represent numbers."}.Get(lang))
 tools:=widget.NewList(func()int{return 6},func()fyne.CanvasObject{return widget.NewLabel("")},func(id widget.ListItemID,o fyne.CanvasObject){names:=[]string{"Base Converter","Bit Visualizer","Two’s Complement","Endian Visualizer","Bitmask Playground","IEEE-754 Explorer"};o.(*widget.Label).SetText(names[id])})
 placeholder:=widget.NewLabel(i18n.Text{NO:"M25 etablerer desktop-arkitekturen. Verktøyene kobles til den delte Go-kjernen i neste milepæler.",EN:"M25 establishes the desktop architecture. Tools connect to the shared Go core in the next milestones."}.Get(lang))
 w.SetContent(container.NewBorder(container.NewVBox(title,intro),nil,container.NewGridWrap(fyne.NewSize(220,500),tools),nil,container.NewPadded(placeholder)))
 w.ShowAndRun()
}
