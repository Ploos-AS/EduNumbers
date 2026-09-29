package core
import "testing"
func TestEndian(t *testing.T){m,e:=ParseHexEndian("0x12345678",32);if e!=nil{t.Fatal(e)};if HexBytes(m.BigEndian)!="12 34 56 78"||HexBytes(m.LittleEndian)!="78 56 34 12"{t.Fatalf("%s / %s",HexBytes(m.BigEndian),HexBytes(m.LittleEndian))};if _,e=ParseHexEndian("10000",16);e==nil{t.Fatal("expected overflow")}}
