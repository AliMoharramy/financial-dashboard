'use server';

export async function createInvoice(formData: FormData) {
  console.log('1');
  console.log(formData);
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  // Test it out:
  console.log(rawFormData);
}
