from flask import *

# 创建Flask应用实例
app = Flask(__name__)
app.static_folder = '../static'
app.template_folder = '../templates'


@app.route('/<path:filename>')
def static_resource(filename):
    try:
        return send_from_directory('../static', filename)
    except:
        return send_from_directory('../static/html/', '404.html')

# 定义路由和视图函数
@app.route('/')
def menu():
    return send_from_directory('../static/html/', 'menu-loading.html')


if __name__ == '__main__':
    # 启动Flask内置的开发服务器
    app.run()
