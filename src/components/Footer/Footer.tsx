import classes from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.upperFooter}>
        <div>contact</div>
        <div>Mallarin kateqoriyalari</div>
        <div>Aliciya komek</div>
        <div>Sexsi kabinet</div>
      </div>
      <div className={classes.lowerFooter}>
        <p>All right</p>
        <p>Visa</p>
        <p>Development</p>
      </div>
    </div>
  )
}
