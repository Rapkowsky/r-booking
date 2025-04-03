import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import api from '@/api';
import { useAuth } from '@/components/AuthProvider';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Separator,
} from '@/components/ui';

import Form from './Form';
import TextInput from './TextInput';

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const SignInForm = () => {
  const { setToken } = useAuth();

  const form = useForm({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/api/signin', data);
      setToken(response.data.accessToken);
    } catch (e) {
      form.setError('root', {
        message: e.response.data.message,
      });
    }
  };

  return (
    <Card className='mx-auto w-[500px]'>
      <CardHeader>
        <h2 className='text-center text-2xl'>Sign In</h2>
        <p className='text-center text-muted-foreground'>
          Sign in using the following credentials:
        </p>
        <p className='mb-0 text-center text-muted-foreground'>
          Email: rr@demo.com
        </p>
        <p className='text-center text-muted-foreground'>
          Password: rrDemoProject
        </p>
        <Separator />
      </CardHeader>
      <CardContent>
        <Form form={form}>
          <TextInput
            control={form.control}
            name='email'
            placeholder='name@example.com'
          />

          <TextInput control={form.control} name='password' type='password' />

          <Button
            disabled={form.isSubmitting}
            onClick={form.handleSubmit(onSubmit)}
          >
            {form.isSubmitting ? 'Loading...' : 'Sign In'}
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
