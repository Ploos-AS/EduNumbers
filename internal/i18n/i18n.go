package i18n

type Language string
const ( Norwegian Language="no"; English Language="en" )

type Text struct{ NO,EN string }
func (t Text) Get(lang Language) string { if lang==English{return t.EN};return t.NO }
