import { mount } from "enzyme";
import React from "react";
import { AppRouter } from "../../components/09-useContext/AppRouter";
import { demoUsers } from "../fixtures/demoUsers";
import { UserContext } from "../../components/09-useContext/UserContext";

describe("Pruebas en <AppRouter />", () => {

  const wrapper = mount(
    <UserContext.Provider value={{demoUsers}}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("should Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
