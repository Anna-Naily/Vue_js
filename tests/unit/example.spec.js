import { mount, shallowMount } from "@vue/test-utils";
import Calculator from "@/components/Calculator.vue";

describe("Calculator.vue", () => {
  it("Ввод данных в полe operand1", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("1");

    expect(wrapper.vm.operand1).toBe(1);
  });
  it("Ввод данных в полe operand2", () => {
    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("1");

    expect(wrapper.vm.operand2).toBe(1);
  });
  it("Получить сумму", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("2");
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("3");

    const btn = wrapper.find('button[name="+"]');
    btn.trigger("click");

    expect(wrapper.vm.result).toBe(5);
  });
  it("Получить разность", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("3");
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("2");

    const btn = wrapper.find('button[name="-"]');
    btn.trigger("click");

    expect(wrapper.vm.result).toBe(1);
  });
  it("Получить произведение", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("3");
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("2");

    const btn = wrapper.find('button[name="*"]');
    btn.trigger("click");

    expect(wrapper.vm.result).toBe(6);
  });
  it("Получить результат деления", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("6");
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("2");

    const btn = wrapper.find('button[name="/"]');
    btn.trigger("click");

    expect(wrapper.vm.result).toBe(3);
  });
  it("Получить возведение в степень", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("3");
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("2");

    const btn = wrapper.find('button[name="степень"]');
    btn.trigger("click");

    expect(wrapper.vm.result).toBe(9);
  });
  it("Получить результат целочисленного деления", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("9");
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("2");

    const btn = wrapper.find('button[name="целочисленное деление"]');
    btn.trigger("click");

    expect(wrapper.vm.result).toBe(4);
  });
  it("Проверка экранной клавиатуры", () => {
    let keyboard = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const wrapper = mount(Calculator);
    let operand1Input = wrapper.find("input[name=operand1]");
    for (let i = 0; i < keyboard.length; i++) {
      operand1Input.setValue("");
      let btn = wrapper.find(`button[name="${Number(keyboard[i])}"]`);
      btn.trigger("click");
      expect(wrapper.vm.operand1).toBe(keyboard[i]);
    }
  });

  it("Проверка кнопки удаления", () => {
    const wrapper = mount(Calculator);
    let operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("25");
    const btn = wrapper.find('button[name="delete"]');
    btn.trigger("click");
    expect(wrapper.vm.operand1).toBe("2");
  });
});
