import { state } from './state'

export const guard = (router): void => {
    router.beforeEach((to): boolean|{ name: string; }  => {
        let result: boolean|{ name: string; } = {name: 'login'};

        if (['login'].includes(to.name) === true) {
            result = true
        }
        if (state().login === true) {
            result =  true;
        };

        return result
    });
};
