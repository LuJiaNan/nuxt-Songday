import { mount } from "@vue/test-utils";
import Index from "@/pages/index.vue";

describe("Index", () => {
  test.skip("is a Vue instance", () => {
    const wrapper = mount(Index);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
