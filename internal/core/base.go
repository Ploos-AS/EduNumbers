package core

import (
 "fmt"
 "math/big"
 "strings"
)

func ParseBase(text string, base int) (*big.Int,error) {
 if base<2||base>36 { return nil,fmt.Errorf("base must be 2..36") }
 s:=strings.TrimSpace(text); if s=="" { return nil,fmt.Errorf("empty integer") }
 n,ok:=new(big.Int).SetString(s,base); if !ok { return nil,fmt.Errorf("invalid base-%d integer",base) }
 return n,nil
}

func FormatBase(n *big.Int, base int) (string,error) {
 if n==nil||base<2||base>36 { return "",fmt.Errorf("invalid value or base") }
 return strings.ToUpper(n.Text(base)),nil
}
