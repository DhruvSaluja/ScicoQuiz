// components/FloatingIcons.js
const FloatingIcon = ({ icon, className }) => (
    <div className={`absolute transform transition-all duration-500 ${className}`}>
      {icon}
    </div>
  )
  