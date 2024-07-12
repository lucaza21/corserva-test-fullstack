/* import app from './index';
import { sequelize } from './database';

const PORT = 3030;

sequelize
	.sync()
	.then(() => {
		console.log('Database synchronized!');
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch(error => {
		console.error('Unable to synchronize database:', error);
	});
 */
