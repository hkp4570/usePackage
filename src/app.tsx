import { user, userType } from '@/services/user';
import { history } from 'umi';

export async function getInitialState(): Promise<{
    name?: string;
    age?: number;
    sex?: string;
    role?: string;
}> {
    if (history.location.pathname !== '/login') {
        try {
            const data = await user();
            if (data) {
                return {
                    name: data.name,
                    age: data.age,
                    sex: data.sex,
                    role: data.role,
                };
            }
        } catch (error) {
            history.push('/login');
        }
    }
    return {
        name: '',
        age: 0,
        sex: '',
        role: '',
    };
}
