import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



// ======================
// Admin Login Component
// ======================

export default function LoginPage() {


  const navigate = useNavigate();


  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);




  const handleLogin = async (event) => {


    event.preventDefault();


    try {


      setLoading(true);



      const response = await axios.post(

        `${import.meta.env.VITE_API_URL}/login`,

        {
          username,
          password
        }

      );



      localStorage.setItem(

        "adminToken",

        response.data.token

      );



      navigate("/dashboard");


    }

    catch(error) {


      setMessage(
        "Invalid credentials"
      );


    }

    finally {


      setLoading(false);


    }


  };





  return (


    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-950
    ">


      <div className="
        bg-white
        w-full
        max-w-md
        rounded-3xl
        p-8
        shadow-2xl
      ">



        <h1 className="
          text-3xl
          font-bold
          text-center
        ">

          CMS Admin

        </h1>



        <p className="
          text-center
          text-gray-500
          mt-2
        ">

          Secure Login

        </p>




        <form

          onSubmit={handleLogin}

          className="
            mt-8
            space-y-4
          "

        >



          <input

            type="text"

            placeholder="Username"

            value={username}

            onChange={(event)=>
              setUsername(event.target.value)
            }


            className="
              w-full
              border
              rounded-xl
              p-3
            "

          />





          <input

            type="password"

            placeholder="Password"

            value={password}

            onChange={(event)=>
              setPassword(event.target.value)
            }


            className="
              w-full
              border
              rounded-xl
              p-3
            "

          />





          <button

            disabled={loading}

            className="
              w-full
              bg-blue-600
              text-white
              rounded-xl
              py-3
              font-semibold
            "

          >


            {

              loading

              ?

              "Checking..."

              :

              "Login"

            }


          </button>



        </form>





        {

          message &&


          <p className="
            text-red-600
            text-center
            mt-4
          ">

            {message}

          </p>


        }



      </div>



    </div>


  );


}
