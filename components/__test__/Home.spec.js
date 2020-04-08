import { mount } from "@vue/test-utils";
import Home from "@/components/Home.vue";

describe("Home", () => {
  test.skip("is a Vue instance", () => {
    const wrapper = mount(Home);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
