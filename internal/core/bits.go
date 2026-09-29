package core

import (
 "fmt"
 "math/big"
 "strings"
)

type Bit struct { Position int; Set bool; Weight *big.Int }
type BitModel struct { Width int; Value *big.Int; Bits []Bit }

func MaxUnsigned(width int) (*big.Int,error) {
 if width!=8&&width!=16&&width!=32&&width!=64 { return nil,fmt.Errorf("unsupported width: %d",width) }
 return new(big.Int).Sub(new(big.Int).Lsh(big.NewInt(1),uint(width)),big.NewInt(1)),nil
}

func NewBitModel(value *big.Int,width int) (BitModel,error) {
 max,err:=MaxUnsigned(width); if err!=nil{return BitModel{},err}
 if value==nil||value.Sign()<0||value.Cmp(max)>0{return BitModel{},fmt.Errorf("value out of range for %d bits",width)}
 bits:=make([]Bit,0,width)
 for p:=width-1;p>=0;p-- { weight:=new(big.Int).Lsh(big.NewInt(1),uint(p)); bits=append(bits,Bit{Position:p,Set:value.Bit(p)==1,Weight:weight}) }
 return BitModel{Width:width,Value:new(big.Int).Set(value),Bits:bits},nil
}

func ParseUnsigned(text string,width int)(BitModel,error){
 s:=strings.TrimSpace(text);if s==""{return BitModel{},fmt.Errorf("empty integer")}
 n,ok:=new(big.Int).SetString(s,10);if !ok{return BitModel{},fmt.Errorf("invalid unsigned integer")}
 return NewBitModel(n,width)
}

func ToggleBit(m BitModel,position int)(BitModel,error){
 if position<0||position>=m.Width{return BitModel{},fmt.Errorf("bit position out of range")}
 n:=new(big.Int).Set(m.Value);n.Xor(n,new(big.Int).Lsh(big.NewInt(1),uint(position)))
 return NewBitModel(n,m.Width)
}

func GroupedBinary(n *big.Int,width int) string {
 s:=n.Text(2);if len(s)<width{s=strings.Repeat("0",width-len(s))+s}
 var b strings.Builder
 for i,ch:=range s {if i>0&&(len(s)-i)%8==0{b.WriteByte(' ')};b.WriteRune(ch)}
 return b.String()
}
