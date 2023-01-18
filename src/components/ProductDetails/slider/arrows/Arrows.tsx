import { ArrowBackOutlined } from '@mui/icons-material'
import ArrowForwardOutlined from '@mui/icons-material/ArrowForwardOutlined'

export const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        marginRight: '60px',
        alignItems: 'center'
      }}
      onClick={onClick}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '40px',
          width: '40px',
          borderRadius: '50%',
          boxShadow: '1px 1px 2px 2px #ada5a5'
        }}
      >
        <ArrowForwardOutlined sx={{ fontSize: '30px', color: '#857b7b' }} />
      </div>
    </div>
  )
}

export const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        zIndex: '10'
      }}
      onClick={onClick}
    >
      <div
        onClick={onClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '40px',
          width: '40px',
          borderRadius: '50%',
          boxShadow: '1px 1px 2px 2px #ada5a5'
        }}
      >
        <ArrowBackOutlined sx={{ fontSize: '30px', color: '#857b7b' }} />
      </div>
    </div>
  )
}
