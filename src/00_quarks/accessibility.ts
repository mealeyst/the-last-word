/**
 * This function applies styles to hide an element visually without hiding it from screen readers
**/
export const accessibility = {
  screenReadersOnly: () => `
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
`,

/**
 * This function applies styled to undo styling for screen readers only for
 * sighted users as well. An example of this might be to show the word
 * 'settings' on larger devices, but have the text be hidden to visual users at
 * lower breakpoints, but still readable to screen readers.
*/
  undoScreenReaderOnly:() => `
position: static;
width: auto;
height: auto;
padding: 0;
margin: 0;
overflow: visible;
clip: auto;
white-space: normal;
`
}