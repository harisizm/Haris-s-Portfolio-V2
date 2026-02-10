interface TechIconProps {
  component?: React.ElementType;
  iconUrl?: string;
}

export const TechIcon = ({ component, iconUrl }: TechIconProps) => {
  return (
    <>
      {component ? (
        (() => {
          const Component = component;
          return <Component className="size-10" />;
        })()
      ) : (
        <img src={iconUrl} alt="tech icon" className="size-10 object-contain" />
      )}
    </>
  );
};