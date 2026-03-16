export async function useExampleContent(path: string) {
  const { data } = await useAsyncData(`examples-${path}`, () =>
    queryCollection("examples")
      .path(`/examples/${path}`)
      .first()
  );

  if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
  }

  return data;
}
