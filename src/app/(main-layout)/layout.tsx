const MainLayout = (props: ChildrenProps) => {
  return (
    <div className="pt-8 pb-10 sm:pt-13 sm:pb-15">
      {props.children}
    </div>
  )
};

export default MainLayout;
