describe('An AppComponent', () => {
  it('is defined', () => {
    const AppComponent = customElements.get('app-component');
    expect(AppComponent).not.toBeUndefined();
  });
});
