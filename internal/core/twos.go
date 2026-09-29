package core

import (
 "fmt"
 "math/big"
 "strings"
)

type TwosModel struct { Width int; Signed *big.Int; Encoded *big.Int; Min *big.Int; Max *big.Int }

func ParseSigned(text string,width int)(TwosModel,error){
 if width!=8&&width!=16&&width!=32&&width!=64{return TwosModel{},fmt.Errorf("unsupported width: %d",width)}
 n,ok:=new(big.Int).SetString(strings.TrimSpace(text),10);if !ok{return TwosModel{},fmt.Errorf("invalid signed integer")}
 half:=new(big.Int).Lsh(big.NewInt(1),uint(width-1));min:=new(big.Int).Neg(new(big.Int).Set(half));max:=new(big.Int).Sub(new(big.Int).Set(half),big.NewInt(1))
 if n.Cmp(min)<0||n.Cmp(max)>0{return TwosModel{},fmt.Errorf("value out of range for %d-bit signed integer",width)}
 encoded:=new(big.Int).Set(n);if n.Sign()<0{encoded.Add(encoded,new(big.Int).Lsh(big.NewInt(1),uint(width)))}
 return TwosModel{Width:width,Signed:n,Encoded:encoded,Min:min,Max:max},nil
}
