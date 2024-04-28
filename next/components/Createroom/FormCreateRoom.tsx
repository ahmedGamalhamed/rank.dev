interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormCreateRoom: React.FC<FormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] flex justify-center items-center">
      <div className="modal-content text-black bg-[#eee]   p-20 border rounded-xl relative">
        <button
          className="close-button text-[#1e1e1e] absolute top-14 right-10 bg-transparent border-none text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        <form className=" text-center">
          <h2 className="text-xl font-bold py-6 text-[#1e1e1e] ">
            Create New Room
          </h2>
          <div>
            <input
              className="bg-[#a3a2a3] placeholder:text-[#000000] placeholder:opacity-70 max-[767px]:w-full md:mr-3  p-3 my-2 rounded-md"
              type="text"
              name="name"
              placeholder="Room Name"
            />
            <input
              className="bg-[#a3a2a3] placeholder:text-[#000000] placeholder:opacity-70 max-[767px]:w-full p-3 my-2 rounded-md"
              type="text"
              name="description"
              placeholder="description"
            />
          </div>
          <div>
            <input
              className="bg-[#a3a2a3] placeholder:text-[#000000] placeholder:opacity-70 max-[767px]:w-full  md:mr-3 p-3 my-2 rounded-md"
              type="text"
              name="Grepo"
              placeholder="GitHub Repo"
            />
            <input
              className="bg-[#a3a2a3] placeholder:text-[#000000] placeholder:opacity-70  max-[767px]:w-full p-3 my-2 rounded-md"
              type="text"
              name="lshare"
              placeholder="live Share (optional)"
            />
          </div>
          <div>
            <input
              className="bg-[#a3a2a3]  placeholder:text-[#000000] placeholder:opacity-70  w-full p-3 my-2 rounded-md"
              type="text"
              name="Tags"
              placeholder="Tags"
            />
          </div>

          <div className="text-center">
            <button
              className="py-2 px-4 rounded-md mt-3 bg-[#1e1e1e] hover:bg-[#050505] text-white text-lg"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCreateRoom;
