const Form = ({ onChange, onClick }) => {
  return (
    <div className="form-details">
      <h1>Form details</h1>
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={onChange}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={onChange}
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            onChange={onChange}
          />
        </div>

        <div>
          <label>Role</label>
          <select name="role" id="role" onChange={onChange}>
            <option value="Others">Others</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <div>
          {" "}
          <label>Message</label>
          <textarea
            name="message"
            is="message"
            cols="30"
            rows="10"
            onChange={onChange}
          ></textarea>
        </div>

        <input type="submit" value="Submit" onClick={onClick} />
      </form>
    </div>
  );
};

export default Form;
