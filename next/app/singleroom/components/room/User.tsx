const User: React.FC<{ id: number }> = ({ id }) => {
  return (
    <div className="py-2 ">
      <div>
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white mr-4"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <span className="text-sm">user name for id {id}</span>
      </div>
    </div>
  );
};

export default User;
