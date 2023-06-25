import { MdClear } from "react-icons/md";

interface ModalProps {
    closeModal: (value: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({ closeModal }) => {

  return (
    <>
      <div id="modal-container" className="w-full max-w-xs mx-auto">
        <div className="flex mt-3 mr-3">
          <button
            type="button"
            className="bg-transparent hover:bg-gray-200 ml-auto rounded-lg text-custom-red"
            onClick={() => {
                closeModal(false);
            }}
          >
            <MdClear size={20} />
          </button>
        </div>
        <form className="bg-white shadow-md rounded py-1.5 px-8 mb-4">
          <div>
            <h1 className="font-bold my-3.5">Welcome back!</h1>
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              required
              id="username"
              type="text"
              placeholder="Username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              required
              id="password"
              type="text"
              placeholder="********"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
