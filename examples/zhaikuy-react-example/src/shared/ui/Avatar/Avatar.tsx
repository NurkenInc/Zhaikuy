interface AvatarProps {
  src: string
  alt: string
}

export const Avatar = (props: AvatarProps) => {
  const {
    src,
    alt
  } = props;

  return (
    <div className="avatar h-12 w-12 btn btn-ghost btn-circle" tabIndex={0}>
      <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}