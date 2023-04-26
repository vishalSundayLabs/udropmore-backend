import { validateOrReject } from "class-validator";

export async function validateJson(validate) {

  try {

    let result = await validateOrReject(validate);

    return true;

  } catch (e) {

    if (e.length) {

      let key = Object.keys(e[0].constraints)[0];
      const error = e[0].constraints[key];

      return new Promise((resolve, reject) => {

        reject({
          error: "Invalid or missing filed",
          message: error,
        });

      });

    }

  }

}
