import { mount, shallowMount } from "@vue/test-utils";
import Calculator from "@/components/Calculator.vue";

describe("Calculator.vue", () => {
  let wrapper;
  const createComponent = () => {
    wrapper = mount(Calculator);
  };
  const findButtonByText = text =>
    wrapper.findAll("button").wrappers.find(w => {
      return w.text() === text;
    });
  const findLabelText = text => {
    return wrapper.findAll("label").wrappers.find(w => {
      return w.text() === text;
    });
  };

  it("Ввод данных в полe operand1", () => {
    createComponent();
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("1");

    expect(wrapper.vm.operand1).toBe(1);
  });
  it("Ввод данных в полe operand2", () => {
    createComponent();
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("1");

    expect(wrapper.vm.operand2).toBe(1);
  });
  it.each`
    firstNumber | secondNumber | operator                   | expectedResult
    ${"3"}      | ${"2"}       | ${"+"}                     | ${5}
    ${"7"}      | ${"2"}       | ${"-"}                     | ${5}
    ${"4"}      | ${"2"}       | ${"/"}                     | ${2}
    ${"8"}      | ${"2"}       | ${"*"}                     | ${16}
    ${"8"}      | ${"2"}       | ${"СТЕПЕНЬ"}               | ${64}
    ${"9"}      | ${"2"}       | ${"ЦЕЛОЧИСЛЕННОЕ ДЕЛЕНИЕ"} | ${4}
  `(
    'Проверка оператора "$operator" с числами $firstNumber и $secondNumber',
    async ({ firstNumber, secondNumber, operator, expectedResult }) => {
      createComponent();
      await findLabelText("Первое значение").trigger("click");
      await findButtonByText(firstNumber).trigger("click");

      await findLabelText("Второе значение").trigger("click");
      await findButtonByText(secondNumber).trigger("click");

      await findButtonByText(operator).trigger("click");
      expect(wrapper.vm.result).toBe(expectedResult);
    }
  );

  it("Проверка экранной клавиатуры", () => {
    const wrapper = mount(Calculator, {
      propsData: {
        keyboard: [],
      },
    });
    let keyboard = wrapper.vm.keyboard.splice(
      wrapper.vm.keyboard.length - 2,
      1
    );
    let operand1Input = wrapper.find("input[name=operand1]");
    for (let i = 0; i < keyboard.length; i++) {
      operand1Input.setValue("");
      let btn = wrapper.find(`button[name="${Number(keyboard[i])}"]`);
      btn.trigger("click");
      expect(wrapper.vm.operand1).toBe(keyboard[i]);
    }
  });

  it("Проверка кнопки удаления", () => {
    createComponent();
    let operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("25");
    const btn = wrapper.find('button[name="delete"]');
    btn.trigger("click");
    expect(wrapper.vm.operand1).toBe("2");
  });
});
