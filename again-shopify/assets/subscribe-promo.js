if (!customElements.get('again-subscribe-promo')) {
  customElements.define(
    'again-subscribe-promo',
    class AgainSubscribePromo extends HTMLElement {
      connectedCallback() {
        this.addEventListener('change', this.onChange);
        this.syncForms();
      }

      disconnectedCallback() {
        this.removeEventListener('change', this.onChange);
      }

      onChange = (event) => {
        const form = event.target.closest('.again-subscribe-promo__form');
        if (!form || !this.contains(form)) return;

        if (event.target.matches('[data-frequency-option]')) {
          const subscriptionOption = form.querySelector(
            '[data-purchase-option][value="subscription"]'
          );
          if (subscriptionOption) subscriptionOption.checked = true;
        }

        this.syncForm(form);
      };

      syncForms() {
        this.querySelectorAll('.again-subscribe-promo__form').forEach((form) => {
          this.syncForm(form);
        });
      }

      syncForm(form) {
        const sellingPlanInput = form.querySelector('[data-selling-plan-input]');
        const frequencyOptions = form.querySelector('[data-frequency-options]');
        const purchaseOption = form.querySelector('[data-purchase-option]:checked');
        const selectedFrequency = form.querySelector('[data-frequency-option]:checked');

        if (!sellingPlanInput || !purchaseOption) return;

        const isSubscription = purchaseOption.value === 'subscription' && selectedFrequency;
        if (frequencyOptions) frequencyOptions.hidden = !isSubscription;
        sellingPlanInput.disabled = !isSubscription;
        sellingPlanInput.value = isSubscription ? selectedFrequency.value : '';

        if (selectedFrequency) {
          const discount = form.querySelector('[data-subscription-discount]');
          const comparePrice = form.querySelector('[data-subscription-compare-price]');
          const price = form.querySelector('[data-subscription-price]');

          if (discount) discount.textContent = selectedFrequency.dataset.planDiscount;
          if (comparePrice) comparePrice.textContent = selectedFrequency.dataset.planComparePrice;
          if (price) price.textContent = selectedFrequency.dataset.planPrice;
        }
      }
    }
  );
}
