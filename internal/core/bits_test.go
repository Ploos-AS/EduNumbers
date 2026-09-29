package core

import "testing"

func TestBitModel(t *testing.T){
 m,err:=ParseUnsigned("42",8);if err!=nil{t.Fatal(err)}
 if GroupedBinary(m.Value,8)!="00101010"{t.Fatal(GroupedBinary(m.Value,8))}
 if len(m.Bits)!=8||m.Bits[1].Position!=6||!m.Bits[2].Set{t.Fatalf("unexpected bits: %#v",m.Bits)}
 toggled,err:=ToggleBit(m,0);if err!=nil||toggled.Value.String()!="43"{t.Fatalf("toggle: %v %v",toggled.Value,err)}
}
func TestBitRange(t *testing.T){
 if _,err:=ParseUnsigned("256",8);err==nil{t.Fatal("expected overflow")}
 if _,err:=ParseUnsigned("-1",8);err==nil{t.Fatal("expected negative rejection")}
 if max,err:=MaxUnsigned(32);err!=nil||max.String()!="4294967295"{t.Fatalf("max: %v %v",max,err)}
}
