/* eslint-disable react/prop-types */
import {forwardRef} from "react"


// eslint-disable-next-line react/display-name
export const Textarea = forwardRef((props, ref) => {
  return (
    <textarea type="text" className="bg-zinc-800 p-3 py-2 block my-2 w-full"
    {...props} ref={ref}>
        {props.children}
    </textarea>
 )
    
})
export default Textarea
