const MyForm = ({ isValid } ) => (
  <form>
    <Checkbox />
    <Input isValid={isValid} />
  </form>
)

// ===

{
  type: "MyForm", // aka key
  props: {
    isValid: false,
    children: [
      { type: Checkbox, ...},
      { type: Input, props: { isValid: false ...} ... }
    ]
  }, 
...}
