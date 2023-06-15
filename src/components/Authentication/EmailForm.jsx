const EmailForm = ({ email, setEmail }) => {
  return (
    <div className="py-2">
      <p className="font-poppins">Email</p>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="border h-[48px] rounded-lg p-3 w-full"
        type="text"
      />
    </div>
  );
};

export default EmailForm;
