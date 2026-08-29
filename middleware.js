export const config = {
  matcher: '/((?!favicon.ico).*)',
};

const EXPECTED = 'Basic YWRtaW46MTIz';

export default function middleware(request) {
  const auth = request.headers.get('authorization');

  if (auth === EXPECTED) {
    return;
  }

  return new Response('Autenticacion requerida', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Passline"',
    },
  });
}
