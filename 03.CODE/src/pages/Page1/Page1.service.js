
import TestService from '../../services/Test.service';

const Page1Service = {
    Test: (text) => {
        return TestService.Test({ data: { projectId: text } });
    },
}

export default Page1Service;