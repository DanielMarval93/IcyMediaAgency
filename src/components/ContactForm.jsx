import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ContactForm = () => {
  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    organization: Yup.string().required("Organization name is required"),
    projectGoal: Yup.string().required("Please, write your project goal."),
    timeline: Yup.string().required("Pleae write if you have timeline."),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    budget: Yup.string().required("Pleaes select your budget"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Accept Terms and Conditions is required"
    ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data, e) {
    // display form data on success
    console.log("Message submited: " + JSON.stringify(data));
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
      <div className="ptf-form-group">
        <label data-number="01">Cual es tu nombre?</label>
        <input
          type="text"
          name="name"
          {...register("name")}
          className={`${errors.name ? "is-invalid" : ""}`}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="02">Cual es el nombre de tu organizacion?</label>
        <input
          type="text"
          name="organization"
          {...register("organization")}
          className={`${errors.organization ? "is-invalid" : ""}`}
        />
        {errors.organization && (
          <div className="invalid-feedback">{errors.organization?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="03">Cual es tu direccion de correo electronico?</label>
        <input
          name="email"
          type="text"
          {...register("email")}
          className={` ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="04">Cuentanos de tus objetivos.</label>
        <textarea
          type="text"
          name="projectGoal"
          {...register("projectGoal")}
          className={`${errors.projectGoal ? "is-invalid" : ""}`}
        />
        {errors.projectGoal && (
          <div className="invalid-feedback">{errors.projectGoal?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="05">Para que fecha quisieras tener el proyecto?</label>
        <input
          type="text"
          name="timeline"
          {...register("timeline")}
          className={`${errors.timeline ? "is-invalid" : ""}`}
        />
        {errors.timeline && (
          <div className="invalid-feedback">{errors.timeline?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="06">Cual es tu presupuesto para este proyecto?</label>
        <select
          name="budget"
          {...register("budget")}
          className={`${errors.budget ? "is-invalid" : ""}`}
        >
          <option value="">10000€ o mas</option>
          <option value="200-500">200€-500€</option>
          <option value="500-1000">500€-1000€</option>
          <option value="1000-5000">1000€-5000€</option>
        </select>
        {errors.budget && (
          <div className="invalid-feedback">{errors.budget?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.5rem" }}></div>

      <div className="ptf-form-group agreement-checkbox ">
        <input
          name="acceptTerms"
          type="checkbox"
          id="acceptTerms"
          {...register("acceptTerms")}
          className={` ${errors.acceptTerms ? "is-invalid" : ""}`}
        />

        <label className="ptf-checkbox" htmlFor="acceptTerms">
          <span className="ptf-checkbox__checkmark"></span>Acepto recibir comunicaciones comerciales u ofertas por parte de Icy Media Agency.
        </label>
        {errors.acceptTerms && (
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "5.625rem" }}></div>

      <button className="ptf-submit-button">
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 17 17"
        >
          <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
        </svg>
      </button>
      {/* End .ptf-submit-button */}
    </form>
  );
};

export default ContactForm;
