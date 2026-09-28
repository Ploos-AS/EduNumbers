package core

import "testing"

func TestParseAndFormatBase(t *testing.T){
 n,err:=ParseBase("2A",16);if err!=nil||n.String()!="42"{t.Fatalf("parse: %v %v",n,err)}
 got,err:=FormatBase(n,2);if err!=nil||got!="101010"{t.Fatalf("format: %q %v",got,err)}
 n,err=ParseBase("-2A",16);if err!=nil||n.String()!="-42"{t.Fatalf("signed parse: %v %v",n,err)}
}
