import React from 'react'
import { Link } from "react-router-dom";



interface PropsType {
  to: string,
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}



const RouteLink = ({to, className, children, style }: PropsType) => {
  return (
    <Link to={to} className={className} style={style}>
      {children}
    </Link>
  )
}

export default RouteLink
