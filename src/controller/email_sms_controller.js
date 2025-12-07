// email_Controller.js
import axios from "axios";
const apikey = "";


class EmailController {

  // -------------------------------
  // 🚀 MÉTODO PARA ENVIAR E-MAIL
  // -------------------------------
  async enviar(req, res) {
    const { para, assunto, mensagem } = req.body;

    if (!para || !assunto || !mensagem) {
      return res.status(400).json({
        erro: true,
        mensagem: "Campos obrigatórios: para, assunto, mensagem"
      });
    }

    try {
      const resultado = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
          sender: {
            name: "Pronto Delivery",
            email: "contato@prontodelivery.com.br"
          },
          to: [{ email: para }],
          subject: assunto,
          htmlContent: mensagem
        },
        {
          headers: {
            "api-key": process.env.BREVO_API_KEY || apikey,
            "Content-Type": "application/json"
          }
        }
      );
      console.log(`E-mail enviado para ${para}`);
      
      return res.json({
        erro: false,
        mensagem: "E-mail enviado com sucesso!",
        detalhes: resultado.data
      });

    } catch (erro) {
      console.log(`erro ao enviar E-mail para ${para}`);
      
      return res.status(500).json({
        erro: true,
        mensagem: "Falha ao enviar e-mail",
        detalhes: erro.response?.data || erro.message
      });
    }
  }
//sendEmail para uso interno (sem express)
  async sendEmail(para,assunto,mensagem) {
    
    if (!para || !assunto || !mensagem) {
      return {
        erro: true,
        mensagem: "Campos obrigatórios: para, assunto, mensagem"
      };
    }

    try {
      const resultado = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
          sender: {
            name: "Pronto Delivery",
            email: "contato@prontodelivery.com.br"
          },
          to: [{ email: para }],
          subject: assunto,
          htmlContent: mensagem
        },
        {
          headers: {
            "api-key": process.env.BREVO_API_KEY || apikey,
            "Content-Type": "application/json"
          }
        }
      );
      console.log(`E-mail enviado para ${para}`);
      
      return {
        erro: false,
        mensagem: "E-mail enviado com sucesso!",
        detalhes: resultado.data
      };

    } catch (erro) {
      console.log(`erro ao enviar E-mail para ${para}`);
      
      return {
        erro: true,
        mensagem: "Falha ao enviar e-mail",
        detalhes: erro.response?.data || erro.message
      };
    }
  }
  
  // -------------------------------
  // 📱 MÉTODO PARA ENVIAR SMS
  // -------------------------------
  async enviarSMS(req, res) {
    const { numero, texto } = req.body;

    if (!numero || !texto) {
      return res.status(400).json({
        erro: true,
        mensagem: "Campos obrigatórios: numero, texto"
      });
    }

    try {
      const resultado = await axios.post(
        "https://api.brevo.com/v3/transactionalSMS/sms",
        {
          sender: "ProntoDel",   // até 11 caracteres
          recipient: numero,     // exemplo: +5598999999999
          content: texto,
          type: "transactional"
        },
        {
          headers: {
            "api-key": process.env.BREVO_API_KEY || apikey,
            "Content-Type": "application/json"
          }
        }
      );
       console.log(`Sucesso ao enviar SMS para ${numero}`);
      console.log(resultado.data);
      
      
      return res.json({
        erro: false,
        mensagem: "SMS enviado com sucesso!",
        detalhes: resultado.data
      });

    } catch (erro) {
      console.log(`erro ao enviar SMS para ${numero}`);
      console.log(resultado.data);
      
      
      return res.status(500).json({
        erro: true,
        mensagem: "Falha ao enviar SMS",
        detalhes: erro.response?.data || erro.message
      });
    }
  }
  //sendSMS para uso interno (sem express)
  async sendSMS(numero,texto) {
    if (!numero || !texto) {
      return {
        erro: true,
        mensagem: "Campos obrigatórios: numero, texto"
      };
    }

    try{
    
      const resultado = await axios.post(
        "https://api.brevo.com/v3/transactionalSMS/sms",
        {
          sender: "ProntoDel",   // até 11 caracteres
          recipient: numero,     // exemplo: +5598999999999
          content: texto,
          type: "transactional"
        },
        {
          headers: {
            "api-key": process.env.BREVO_API_KEY || apikey,
            "Content-Type": "application/json"
          }
        }
      );
       console.log(`Sucesso ao enviar SMS para ${numero}`);
      console.log(resultado.data);
      
      
      return {
        erro: false,
        mensagem: "SMS enviado com sucesso!",
        detalhes: resultado.data
      };

    } catch (erro) {
      console.log(`erro ao enviar SMS para ${numero}`);
      console.log(erro.response?.data || erro.message);

      
      return {
        erro: true,
        mensagem: "Falha ao enviar SMS",
        detalhes: erro.response?.data || erro.message
      };
    }
  }
}


export default new EmailController();
