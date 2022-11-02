import React from "react";

const Blog = () => {
  return (
    <div className="w-[85%] mx-auto bg-slate-100 my-5 min-h-[80vh] p-5">
      <h3 className="text-4xl mb-5 font-bold font-mono text-[#ed0b70] ">
        Blog Posts
      </h3>
      <div className="space-y-10">
        <div className="w-[95%] mx-auto">
          <h3 className="text-xl font-semibold">
            Difference between authorization and authentication?
          </h3>
          <p className="mt-2">
            Authorization is the process where we differentiate a user's level
            of access. Suppose a in an organization there is a manager and an
            employee. Here, both have different level of access to account's
            which is diffentiated by authorization. On the otherhand,
            Authentication is the process by which the provider identifies the
            random visitor to make of their real identity. Authentication is
            required in every sector to identity the visitors in the beginning
            and Authrization is required for having the ensured that the right
            person gets the permission for accessing the crucial instances.
          </p>
        </div>
        <div className="w-[95%] mx-auto">
          <h3 className="text-xl font-semibold">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h3>
          <p className="mt-2">
            Firebase authentication helps secure the website very easily and
            effectively. It is very user friendly with detailed documentation
            regarding it's functionalities. It acts as a middleman to login into
            gihub, facebook,apple, gmail, microsoft etc and using these 3rd
            party site's information to identify the user. One can also login
            using email and password. Furthermore, by using packages like
            react-firebase-hooks it's very easy to implement firebase's
            functionalities. There are also other alternatives to firebase such
            as MongoDB, Okta, Auth0.
          </p>
        </div>
        <div className="w-[95%] mx-auto">
          <h3 className="text-xl font-semibold">
            What other service does firebase provide other than authentication?
          </h3>
          <p className="mt-2">
            Firebase provides a lot of services excluding authentication. They
            are listed below-
            <br />
            Firebase Database <br />
            Realtime Database <br />
            Storage <br />
            Hosting <br />
            Machine Learning <br />
            Cloud Messaging <br />
            Analytics
          </p>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Blog;
