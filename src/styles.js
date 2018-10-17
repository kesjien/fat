import { injectGlobal } from 'styled-components'
import muiCss from 'muicss/dist/css/mui.min.css'

injectGlobal([`
  body {
    margin: 0;
    font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
    background-color: #7eb6df0f;
    -webkit-font-smoothing: antialiased;
  },
  ${muiCss}
`])
