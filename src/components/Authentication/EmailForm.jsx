const EmailForm = ({ email, setEmail }) => {
  return (
    <form className="py-2 w-[350px]">
      <label className="font-poppins">Email</label>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="border h-[48px] rounded-lg p-3 w-full"
        type="email"
        required
      />
    </form>
  );
};

export default EmailForm;
