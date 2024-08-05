import React, {
  createContext, useContext, useState, useMemo
} from 'react';

const FormContext = createContext();

function RaiseFormProvider({ children }) {
  const [form, setForm] = useState({});
  const formMemo = useMemo(() => ({ form, setForm }), [form]);

  return (
    <FormContext.Provider value={formMemo}>
      {children}
    </FormContext.Provider>
  );
}

export default RaiseFormProvider;

export const useRaiseFormContext = () => useContext(FormContext);
