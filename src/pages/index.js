import * as React from "react"
import * as styles from './index.module.css'

const IndexPage = () => <>
  <div className={styles.divExternal}>div with color imported from another file</div>
  <div className={styles.divInternal}>div with color from the same file</div>
  </>


export default IndexPage
