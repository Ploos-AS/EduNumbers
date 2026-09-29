package core
import "testing"
func TestTwosComplement(t *testing.T){m,e:=ParseSigned("-1",8);if e!=nil||m.Encoded.Int64()!=255{t.Fatalf("%v %v",m,e)};m,e=ParseSigned("-128",8);if e!=nil||m.Encoded.Int64()!=128{t.Fatalf("%v %v",m,e)};if _,e=ParseSigned("128",8);e==nil{t.Fatal("expected range error")}}
