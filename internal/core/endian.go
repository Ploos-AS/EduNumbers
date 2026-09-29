package core

import (
 "fmt"
 "math/big"
 "strings"
)

type EndianModel struct { Width int; Value *big.Int; BigEndian []byte; LittleEndian []byte }

func ParseHexEndian(text string,width int)(EndianModel,error){
 if width!=16&&width!=32&&width!=64{return EndianModel{},fmt.Errorf("unsupported width: %d",width)}
 s:=strings.TrimSpace(strings.TrimPrefix(strings.ToLower(text),"0x"));n,ok:=new(big.Int).SetString(s,16);if !ok||n.Sign()<0{return EndianModel{},fmt.Errorf("invalid hexadecimal value")}
 limit:=new(big.Int).Lsh(big.NewInt(1),uint(width));if n.Cmp(limit)>=0{return EndianModel{},fmt.Errorf("value does not fit in %d bits",width)}
 size:=width/8;be:=make([]byte,size);raw:=n.Bytes();copy(be[size-len(raw):],raw);le:=make([]byte,size);for i:=range be{le[i]=be[size-1-i]}
 return EndianModel{Width:width,Value:n,BigEndian:be,LittleEndian:le},nil
}
func HexBytes(b []byte)string{parts:=make([]string,len(b));for i,v:=range b{parts[i]=fmt.Sprintf("%02X",v)};return strings.Join(parts," ")}
