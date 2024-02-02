import './Panel.scss'

export function Panel ({children, hasPadding}) {
  const classNames = ['panel']
  
  if (hasPadding) classNames.push('panel--has-padding')

  return(
    
      <div className={classNames.join(' ') }>
        {children}
      </div>
  )
}