import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [post, setPost] = useState();

  useEffect(() => {
    const postLoad = async () => {
      const res = await axios.post('http://demo2211087.mockable.io/mock')
      setPost(res?.data)
      console.log(res.data)
    }
    postLoad();

  }, [])
  console.log(post?.companies)

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-1/2 mx-auto mt-12">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          {post?.companies?.map((user, i) => (
            <tr key={i} className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600">
              <th scope="row" className="py-4 pl-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </th>
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.name}
              </th>
              <td className="py-4 px-6">
                {user.email}
              </td>
              <td className="py-4 px-6">
                <span class="tracking-wider  border text-black px-2 border-rounded py-1 text-sm rounded leading-loose mx-2 font-semibold" title="">
                  <i class="fas fa-circle text-blue-700" aria-hidden="true"></i> {user.status}
                </span>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default App;
