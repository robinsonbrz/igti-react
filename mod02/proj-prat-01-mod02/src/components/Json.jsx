export function Json({ children: objectToRender }) {
  return <pre>{JSON.stringify(objectToRender, null, 2)}</pre>
}
